import {
    AsyncStorage // Whole disk read write applications were handled asyncrhonusly...
} from 'react-native';
var STORAGE_KEY = '@storage_key';

var api = {
        fetchSth() {
            var URL = 'https://jsonplaceholder.typicode.com/comments';
            return fetch(URL).then((res) => res.json()).catch((error) => {
                alert('Hata Olustu');
            });;
        },


        fetchAndReturn() {
            var URL = 'https://jsonplaceholder.typicode.com/comments';
            //This one returns promise object and url

            return {
                promise: fetch(URL).then((res) => res.json()).catch((error) => {
                    alert('Hata Olustu');
                }),
                url: URL
            };
        },

        postData(data) {
            //alert(JSON.stringify(data))
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })


        },

    },
    //Save anything to disk
    async saveToDisk(selectedValue) {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(selectedValue));
            //alert('Saved');
            return;
        } catch (error) {
            alert(error);
            return;
        }

    },
    //Read anything from disk
    async readFromDisk() {
        try {
            var data = await AsyncStorage.getItem(STORAGE_KEY);
            //alert('Saved');
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    },
    //Delete previously saved data from disk.
    async removeFromDisk(index) {

        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            this.goSelectCountry();
        } catch (error) {
            //alert(bundle.kayit_hata+error);
        }

    }

}
module.exports = api;
