# MagicMirror

Following on from my daughter and I building a couple of magic mirrors, there was a lot of interest in creating a how to. The MagicMirror project homepage is at https://magicmirror.builders/

You will need a Raspberry Pi (version 2 or better, Pi Zero / w doesn't work *yet* :)), an SD card (of at least 8Gb) and a monitor to go behind the mirror. You will also need a two way mirror. I bought my "mirror glass" from https://www.cutplasticsheeting.co.uk/mirrored-sheeting/two-way-acrylic-mirror

On this site you will find a basic howto as well as a complete RPi image and a couple of scripts to make creating a MM really easy. This guide works on the assumption you have a raspberry pi and it's connected to a monitor and cabled to the network. 

## Part 1: 
Complete pre-configured MagicMirror Image (message comments edited to avoid embarassing "Hey Sexy!" messages). This version pulls the news from the BBC site. This image auto starts Magic Mirror on boot and stops the monitor from sleeping. Just take the img file and write it to an SD card, following these instructions: 

Download Etcher (from https://etcher.io/) and install it; it works on Mac OS, Linux and Windows
Download [mm.img](https://www.michaelsage.co.uk/mm.img)

Connect an SD card reader with the SD card inside.
Open Etcher and select from your hard drive the mm.img file.
Select the SD card you wish to write your image to.
Review your selections and click 'Flash!' to begin writing data to the SD card.
Take the SD card and put it in a Raspberry Pi and MM will start and away you go. 

This Image was last updated on 22/09/2018.

## Part 2: (Started - mmsetup.sh). 
Installer prompts you for location (Complete) and weather ID (In Progress) in order to display correct weather and set time zone.

## Part 3: (Coming soon). 
DIY Dads building a MagicMirror the hardware.

# Quick Tips

## Rotate Display
Rotate the display to portrait mode if your mirror isn’t landscape: Either SSH into your pi or use a terminal on the pi

sudo nano /boot/config.txt

Add the following line to the file:

display_rotate=1

## Wifi
If you have wireless you will need to follow this guide, to exit MagicMirror press Ctrl + Q (if it restarts open a terminal prompt and type pm2 stop mm): https://www.raspberrypi.org/documentation/configuration/wireless/desktop.md

## Location

Exit MagicMirror by pressing Ctrl + Q (if it restarts open a terminal prompt and type pm2 stop mm). Click on the Raspberry -> Preferences -> Raspberry Pi Configuration. Then click Localisation. Set Timezone. (I will be automating this in Part 2).

## More Modules

Take a look at https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules for more modules to add to your mirror. 

Drop me a message in the dadsnetwork facebook group if you need any help.

