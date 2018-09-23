If you already have my MagicMirror Image you will need to add the following lines to your config.js

Type nano MagicMirror/config/config.js to edit the file

After the this block

                {
                        module: "compliments",
                        position: "lower_third"
                },

Paste or type the following:

               {
                        module: "currentweather",
                        position: "top_right",
                        config: {
                                locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
                                appid: ""
                        }
                },
                {
                        module: "weatherforecast",
                        position: "top_right",
                        header: "Weather Forecast",
                        config: {
                                locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
                                appid: ""
                        }
                },

Save the file by pressing ctrl o then exit by pressing ctrl q

You can now run the mmsetup.sh file
