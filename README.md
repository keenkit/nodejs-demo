# nodejs-demo
Description:
------------
The demo is a kind of a nodejs express practice. The function inside is pretty simple, which can be easily performed by other languages like SpringMVC, ASP.NET MVC or Django.   
The original project is from [http://blog.fens.me/nodejs-express3/](http://blog.fens.me/nodejs-express3/).  However, the project is based on Express 3.0, a little different from the latest version 4.0. 
In other words, some coding as well as settings are essential to make the site running under 4.0 :smile:

Prerequisites:
--------------
NodeJS, NPM is a necessity before the exercise, furthermore, Express is to be installed on you local as well.   
All projects are running under my virual Ubuntu 14.1, which is pretty straightforward to install a variety of modules, softwares, open-sourced projects.   
Hope you will get your own LINUX! With all do respect, you will finally love this system:relaxed:

Contents:
--------
Some tutorials are put in the personal blog site [http://www.basicPython.com](http://web.basicpython.com:9000/blog/category/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E5%86%99NodeJSExpress%E7%AB%99%E7%82%B9/), the project is composed of two main modules:
>Login module   
>Movie module

In terms of "Login", most codes are from the original project. What makes difference is the Routing changed a bit.  
As for Movie module, most codes are refactored, now it supports Adding movies, listing movies, removing movies. All the data are persisted to Mongodb on the local. Mongoose is the key module to do some operation on Mongo. You will have a whole picture of them after downloading the project.

Overview:
--------
Main page:  
![](https://cloud.githubusercontent.com/assets/4235291/13745151/690a8068-ea27-11e5-9537-3e4a802ec0ff.jpg)    

Login page:   
![](https://cloud.githubusercontent.com/assets/4235291/13745154/691e9dfa-ea27-11e5-8a44-fb135798e89b.jpg)    

After login, home page:   
![](https://cloud.githubusercontent.com/assets/4235291/13745150/68f93e48-ea27-11e5-8148-b1c88402b0d1.jpg)    

Add movie:    
![](https://cloud.githubusercontent.com/assets/4235291/13745149/68f2ec32-ea27-11e5-84ce-d6f818730291.jpg)     

View single movie (can delete it):    
![](https://cloud.githubusercontent.com/assets/4235291/13745152/690c3ba6-ea27-11e5-9a90-246470154cfa.jpg)     

View movie list (Angularjs binding):   
![](https://cloud.githubusercontent.com/assets/4235291/13745153/6911fc8a-ea27-11e5-866d-b9cbb1224d9b.jpg)    


How to run from local?
----------------------
*  Get your MongoDB running on your local   
```Bash
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz # Download

tar -zxvf mongodb-linux-x86_64-3.0.6.tgz  # Unzip

mv mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb    # Unzip all the files into the folder you prefer

export PATH=/usr/local/mongodb/bin:$PATH    # Setup the path

cd /usr/local/mongodb/bin/    # Go to Mongodb bin folder

sudo mkdir -p /data/db    # make a directory the db data

cd /usr/local/mongodb/bin/   #Go to mongodb bin folder

sudo ./mongod   # You will get it be running!!!
```
You finally get it down, thereby you will see the stuff like this:   
```Bash
will@will-virtual-machine:/usr/local/mongodb/bin$ sudo ./mongod
[sudo] password for will: 
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] MongoDB starting : pid=41349 port=27017 .......
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] db version v3.2.3
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] git version: b326ba837cf6f49d65c2f85e1......
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.1f 6 Jan 2014
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] allocator: tcmalloc
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] modules: none
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten] build environment:
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten]     distmod: ubuntu1404
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten]     distarch: x86_64
2016-03-14T21:07:46.956+0800 I CONTROL  [initandlisten]     target_arch: x86_64
..........
```
Pretty cool, isn't it?    
*  Run the application   
```Bash
cd nodejs-demo    # You need to get it downloaded at first somewhere, go to it.

npm start     # Start the application
```
You will see it is started with some lovely words, making you absolutely feeling right!   
```Bash
> nodejs-demo@0.0.0 start /home/will/Documents/javascript/nodejs-demo
> node ./bin/www
```
GO WITH : localhost:3000    
:four_leaf_clover::four_leaf_clover::four_leaf_clover:
