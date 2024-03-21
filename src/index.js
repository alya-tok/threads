const axios = require("axios")

// Scraper from https://api.alyachan.dev
// Bot https://github.com/rifnd/moon-bot
// Github https://github.com/alya-tok

module.exports = threads = (username, type) =>{
    return new Promise(async (resolve) => {
         try {
            if (type == 'search') { // search on post or search
            let response = await (await axios.post('https://www.threads.net/api/graphql', {
                lsd: "AVrTctk8rlk",
            variables: JSON.stringify({ 
                query: username, first: 20,                              should_fetch_ig_inactive_on_text_app: null, __relay_internal__pv__BarcelonaIsLoggedInrelayprovider: null     }),
                doc_id: "7156716761073591",
             },
             { headers: {
            Authority: "www.threads.net",
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://www.threads.net",
            Pragma: "no-cache",
            "Sec-Fetch-Site": "same-origin",
            "X-ASBD-ID": "129477",
            "X-IG-App-ID": "238260118697367",
            "X-FB-LSD": "AVrTctk8rlk",
            "X-FB-Friendly-Name": "BarcelonaProfileThreadsTabQuery",
            }})).data
            if (!response.data.xdt_api__v1__users__search_connection.edges.length) return resolve({
               creator: 'AlyaChan Apis',
               status: false,
               msg: 'User not available'
            })
            let data = []
            response.data.xdt_api__v1__users__search_connection.edges.map(ul => {
               data.push(ul.node)
            })
            resolve({
               creator: 'AlyaChan Apis',
               status: true,
               data
            })
            } else {
            let response = await axios.get(`https://www.threads.net/@${username}`, { headers: {
            Authority: "www.threads.net",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://www.threads.net",
            Pragma: "no-cache",
            Referer: "https://www.instagram.com",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
            }});
            let userIdKeyValue = response.data.match('"user_id":"(\\d+)"');
            let userId = Number(userIdKeyValue[1]);
            if (!userId) return resolve({
               creator: 'AlyaChan Apis',
               status: false,
               msg: 'Cant get user id'
            })
            const json = await axios.post('https://www.threads.net/api/graphql', {
            lsd: "AVrTctk8rlk",
            variables: JSON.stringify({ userID: userId }),
            doc_id: "6232751443445612",
            }, { headers: {
            Authority: "www.threads.net",
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://www.threads.net",
            Pragma: "no-cache",
            "Sec-Fetch-Site": "same-origin",
            "X-ASBD-ID": "129477",
            "X-IG-App-ID": "238260118697367",
            "X-FB-LSD": "AVrTctk8rlk",
            "X-FB-Friendly-Name": "BarcelonaProfileThreadsTabQuery",
             }})
             if (!json.data.data.mediaData.threads.length) return resolve({
               creator: 'AlyaChan Apis',
               status: false,
               msg: 'Error no content post'
            })
            let data = []
            json.data.data.mediaData.threads.map(v => 
               data.push(v.thread_items)
            )
             resolve({
               creator: 'AlyaChan Apis',
               status: true,
               data
            })
          }
         } catch (e) {
            console.log(e)
            return resolve({
               creator: 'AlyaChan Apis',
               status: false,
               msg: e.message
            })
         }
      })
   }