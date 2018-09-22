# Set the time zone using dpkg-reconfigure
echo -e "\e[1;33mSetting Time Zone\e[0m"
sleep 2s
dpkg-reconfigure tzdata

# Setting the weather based on data from OpenWeatherMap
echo -e "\e[1;33mSetting Up Weather\e[0m"
echo " "
echo -e "\e[1;31mYou will need your OpenWeatherMap API key (sign up here: https://home.openweathermap.org/)\e[0m"
echo -e "\e[1;31mYou will also need to find your LocationID  (go to https://openweathermap.org and find your city then copy the numbers from the end of the URL)\e[0m"
read -n 1 -s -r -p "Press any key to continue"