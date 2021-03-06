[<div style="text-align: center"><img src="app/assets/images/logo.png" alt="logo"></div>](https://rubyreel.herokuapp.com/#/)


<h3 style="text-align: center">Share, explore, and discover</h3>

# Table of Contents
1. Introduction
2. Features
3. Recent Updates
4. Technology
5. A closer look
    * Video Views
    * Smart Errors
6. Final Notes

# Introduction - At a glance

<img align="right" src="app/assets/images/rubyreelgif.gif" alt="rubyreelgif">

### [RubyReel](https://rubyreel.herokuapp.com/#/), a YouTube clone, is a video-sharing platform where users can uplaod their own videos, as well as watch and express their opinions of other user videos through the medium of likes, dislikes, and comments.

### RubyReel was engineered to be responsive, efficient, user-friendly, and fun to use.

<br></br>

# Features
### A few of the things you can do on RubyReel:
* Watch videos
* Upload and manage your own videos
* Leave comments on videos
* Reply to comments
* Edit or delete your comment or reply
* Leave a like or a dislike on videos and comments
* Search videos by title using the search bar
* See specific users uploaded videos on their channel
* View your uploaded videos and videos you've liked on your channel, also update your account information

# Recent Updates
### Channels (11/02/2020)
Users now have their own channels! Owners of a channel may look at their uploaded videos, subscriptions, and are able to edit their user info. When viewing other user's channels, you may view their uploaded videos and their info.

<img src="app/assets/images/channels.gif" alt="addtags">

### Video Tags (10/30/20)

<img align="right" src="app/assets/images/addtags.gif" alt="addtags">

Now when uploading (and editing) your videos on RubyReel, you can create your own tags to add on to videos. Then, on the homepage, you can sort the videos by tags and see only videos with that tag attached! Easily edit your video to remove tags, or add new ones.

<img src="app/assets/images/switch_tags.gif" alt="switchtags">

# Technology
### This is a fullstack application that was built using the following technologies:
* JavaScript
* React / Redux
* HTML / CSS
* Ruby
* Rails
* Postgres

# A closer look
### I want to take a closer look at a few features included in the development of RubyReel.

## Video Views
At first, I was going to assign a video a view everytime it was played, but I realized that it could lead to unrealistic numbers if users were to spam the play button or refresh their page rapidly.

To combat this I thought about checking the last time a user had viewed a specific video by implementing a joins table with foreign keys pointing to `user_id` and `video_id`. The view would only be created if the `created_at` of the last view of that video by that user was more than 30 seconds ago. This worked, however it wouldn't count views for non-logged in users. 

I got past this issue by replacing the `user_id` column with `ip_address`, and instead checking the last time that the ip address watched the video. This makes the video count number even more secure, as malicious users could have had multiple accounts set up in one place to bump up a video's view count.

Now, a video will have a safer, consistant, and more accurate view count.

```Ruby
# videos_controller.rb

    def add_view
        last_view = View.where(ip_address: request.remote_ip).where(video_id: params[:video_id])
        if last_view[0]
            if ((Time.now - last_view.last.created_at) > 30)
                @view = View.new(ip_address: request.remote_ip, video_id: params[:video_id])
                if @view.save
                    redirect_to api_video_url(params[:video_id])
                else
                    render json: @view.errors.full_messages, status: :unprocessable_entity
                end
            end
        else
            @view = View.new(ip_address: request.remote_ip, video_id: params[:video_id])
            if @view.save
                redirect_to api_video_url(params[:video_id])
            else
                render json: @view.errors.full_messages, status: :unprocessable_entity
            end
        end
    end

```

## Smart Errors
I wanted logging in and signing up to RubyReel to feel easy, smooth, and effortless. I wanted to make sure that the user knew exactly what was going on if they had a failed sign in or log in, so made sure to receive errors from my backend and update my state with them so I would be able to present the specific errors to my users.

<div style="text-align: center"><img src="app/assets/images/loggingin.gif" alt="video index"></div>

I also knew that in signup, there are multiple fields that can be invalid. To make it clear which fields are erroring out, I made sure that the specific input that was invalid would light up red to tell the user that is the field that has something wrong with it, and the descriptive error message is displayed right below it.

<div style="text-align: center"><img src="app/assets/images/signup.gif" alt="video index"></div>

With lots of experience being a user myself, I know that I need to present information as clearly as possible to the user and leave nothing up to speculation.

## The Like Bar
One thing that I just think is really cool is the like bar for video likes. I wanted mine to function how it does on YouTube, how it shows the proportion of likes to dislikes, and then highlights it blue if you like it. I thought it was a cool, interesting little feature that was fun to implement that looks really clean and adds a lot to the feel of the website.

<div style="text-align: center"><img src="app/assets/images/likebar.gif" alt="video index"></div>

```Javascript
// video_show.jsx

    getLikeProportion() {
        let numLikes = this.props.currentVideo.likerIds.length;
        let totalNum = this.props.currentVideo.likerIds.length + this.props.currentVideo.dislikerIds.length;
        let result = (numLikes / totalNum) * 100;
        if (result === NaN) {
            return '50%';
        } else {
            return `${result}%`;
        }
    }

    getDislikeProportion() {
        let numDislikes = this.props.currentVideo.dislikerIds.length;
        let totalNum = this.props.currentVideo.likerIds.length + this.props.currentVideo.dislikerIds.length;
        let result = (numDislikes / totalNum) * 100;
        if (result === NaN) {
            return `50%`;
        } else {
            return `${result}%`;
        }
    }

```
After recieving the proportions, I set the inline styling to `width: ${proportion}%` of the two divs in the like-bar, with a transition property to give it the smooth glide. 
```Javascript
// video_show.jsx
// in the render() method, before the return

    // sets up proportions for the likebar, using inline react styling
        let likeBarStyle = '';
        let dislikeBarStyle = '';
        if (this.props.currentVideo) {
            likeBarStyle = {
                width: this.getLikeProportion()
            }
            dislikeBarStyle = {
                width: this.getDislikeProportion()
            }
        }
```
```Javascript
// video_show.jsx
// this is jsx in the return method of the render()

    <div id="like-dislike-bar-container">
        <div id="like-bar" style={likeBarStyle}></div>
        <div id="dislike-bar" style={dislikeBarStyle}></div>
    </div>
```

# Final Notes
This was my first real project, and I had an amazing time while doing it. Time past by like nothing while working on it, and I was genuinly excited each day to build out new features and functionality. I cannot wait to dive into new projects and work with new technologies, but once I have any free time, I'll be looking to include more features to RubyReel.

## What I plan to implement:
* Subscriptions ✅
  * Users can subscribe to other users
  * User pages (channels) where the owner can edit their page and manage their videos. Other users can view it to see all the owners videos and content
* Video Tags ✅
   * Users can tag their videos to a certain category (funny, scary, vlog, etc)
* Filters
  * Filter search results by different attributes like length, views, likes, etc
  * Filter comments by likes, reply count, age, etc
* Search results
  * Be able to search and receive users as well as videos
