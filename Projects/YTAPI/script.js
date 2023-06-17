
document.addEventListener("DOMContentLoaded", () => {

    const apikey = "DqgZn12163T3Eu4yAxtRokg0q1WkEwDW"

    document.getElementById("btn-search").onclick = () => {

        const idChannel = document.querySelector("#entry-channel-id").value;

        const request = new XMLHttpRequest();
        request.onload = function(){
            const data = JSON.parse(this.responseText);
            const videos = data.contents;
            videos.forEach(videoFromYt => {
                // console.log(videoFromYt.video.title);
                // console.log(videoFromYt.video.stats.views);
                // console.log(videoFromYt.video.thumbnails[0].url);

                const containerVideo = document.createElement('div');
                const titleVideo = document.createElement('h1');
                titleVideo.innerHTML = videoFromYt.video.title;

                const viewsVideo = document.createElement('p');
                viewsVideo.innerHTML = videoFromYt.video.stats.views;

                const imgVideo = document.createElement('img');
                imgVideo.setAttribute('src', videoFromYt.video.thumbnails[0].url)

                containerVideo.append(titleVideo);
                containerVideo.append(viewsVideo);
                containerVideo.append(imgVideo);

                document.querySelector(".result").append(containerVideo);
            });
        }

        request.open("GET", `https://api.apilayer.com/youtube/channel/videos?id=${idChannel}&apikey=${apikey}`);
        request.send();

        return false;

    }

})