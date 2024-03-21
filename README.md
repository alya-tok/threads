# threads scraper
 Simple code threads from threads.net

# Example Response String
```
{
  "creator": "AlyaChan Apis",
  "status": true,
  "data": [
    {
      "username": "bulansutena",
      "pk": "3552230280",
      "hasOnboardedToTextPostApp": true,
      "text_post_app_is_private": null,
      "is_verified": true,
      "friendship_status": null,
      "follower_count": 189315,
      "profile_context_facepile_users": null,
      "full_name": "Bulan",
      "has_onboarded_to_text_post_app": true,
      "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/358051475_293147866498631_8939835592856376911_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=3kzQFIDUBCUAX8W0q9e&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBHzR-etGzBKU-Gl-AFXuePrwT3LPl1648y5YUDJTFvoA&oe=65FFCECF&_nc_sid=10d13b",
      "id": null
    },
    {
      "username": "bln.anggraini_",
      "pk": "7364483727",
      "hasOnboardedToTextPostApp": true,
      "text_post_app_is_private": null,
      "is_verified": false,
      "friendship_status": null,
      "follower_count": 48,
      "profile_context_facepile_users": null,
      "full_name": "bulan sutena",
      "has_onboarded_to_text_post_app": true,
      "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/365062685_114129225105611_6895343881711082002_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=ydDbbGEtXZ4AX-XcuSy&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfD6z5KSq6W2bnWAZF4P2d3TmlNJfa88fjJqk3CF8UVbCA&oe=660062DD&_nc_sid=10d13b",
      "id": null
    },
    {
      "username": "32.bulan_sutena.32",
      "pk": "37569452441",
      "hasOnboardedToTextPostApp": true,
      "text_post_app_is_private": null,
      "is_verified": false,
      "friendship_status": null,
      "follower_count": 3,
      "profile_context_facepile_users": null,
      "full_name": "Bulan Sutena",
      "has_onboarded_to_text_post_app": true,
      "profile_pic_url": "https://instagram.faep21-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.faep21-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=NSpCCcRJZAAAX_B_dGu&edm=ALlQn9MBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfDO_gq0KhsupCEzIYPi25zX3-8j46tpWdwZkgRqar6dUA&oe=660186CF&_nc_sid=e7f676",
      "id": null
    }
  ]
}
```

## Example Calls Request
```js
const request = require("@moonr/threads")
let req = await request('bulansutena', 'search')
console.log(req)
```











# Example Response String
```
{
  "creator": "AlyaChan Apis",
  "status": true,
  "data": [
    [
      {
        "post": {
          "user": {
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/358051475_293147866498631_8939835592856376911_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=3kzQFIDUBCUAX9KD3tZ&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfA2E72VLUXCFSoDvzb-Cy2hYAHV4tFvOstGbSbX6U_bjQ&oe=65FFCECF&_nc_sid=10d13b",
            "username": "bulansutena",
            "id": null,
            "is_verified": true,
            "pk": "3552230280"
          },
          "image_versions2": {
            "candidates": [
              {
                "height": 1920,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfCILfvj7IUIpIu0eXF8GxEpbYaci-IK1qI-IziF0gkMUw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 1440,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 1440,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfAGVLtJdRoxxm1kQvZs6gI36XbReQWucqRp3OXEqPPSaQ&oe=65FF36C2&_nc_sid=10d13b",
                "width": 1080,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 960,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfBcRFd3j4rllmeMC6NCwhgRUBZBJiKwI2hNICwNsby4sw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 720,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 853,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfCqIYOc9pbwoBdXDuVsES26NJtmGVikrBabNOs_36asQA&oe=65FF36C2&_nc_sid=10d13b",
                "width": 640,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 640,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfDp7DWszxIHR_BwpayeMwa2GI8tOc30B9XuIvTWc4EopQ&oe=65FF36C2&_nc_sid=10d13b",
                "width": 480,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 427,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfDZPZnpZ9cA_vWiW75eQEj5eif3MElDNsT1JwTlxGcDlg&oe=65FF36C2&_nc_sid=10d13b",
                "width": 320,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 320,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=dst-jpg_e35_p240x240&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfCJXwvG78pUILPSQQuk0LgCI9y3KXZxvDehjh7b357INA&oe=65FF36C2&_nc_sid=10d13b",
                "width": 240,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 1080,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfBM2lyHAo8DQE7_0a4lMRAtKdVN5zVGMN8A_X5sBTALTg&oe=65FF36C2&_nc_sid=10d13b",
                "width": 1080,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 750,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s750x750_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfD7bElUEwmthb0sGuxdmeuiPBl9q7Q3aBlzbyzg2EdWmw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 750,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 640,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfAeuQ7wuCwHKptrAPMnmId71TEuhB4zI1GRv6sKFdM1Hw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 640,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 480,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfBD-BS4F8c7tLAwDNUei29DhW0b5B4wbWkmPCCED-6Krw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 480,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 320,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfBzhS1eVoahb59qAHV3nfBkJfO5E_DBOPR7Nhn1jvphfQ&oe=65FF36C2&_nc_sid=10d13b",
                "width": 320,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 240,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s240x240&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfDfdNZGpTda2oH0_w2X-XMFWgUQYUI1QLKRYBvGyHRymQ&oe=65FF36C2&_nc_sid=10d13b",
                "width": 240,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 150,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358536464_1010128860177309_2772323668543064404_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s150x150&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=64s3FkOF21wAX_VAWkU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MzA2ODE2NzgyOTE1NjU1Nw%3D%3D.2-ccb7-5&oh=00_AfB3UjDDAmQLL1s-XUXzmiJB-0NyGwBthB-OLzcL_HrKkw&oe=65FF36C2&_nc_sid=10d13b",
                "width": 150,
                "__typename": "XDTImageCandidate"
              }
            ]
          },
          "original_width": 1440,
          "original_height": 1920,
          "video_versions": null,
          "carousel_media": null,
          "carousel_media_count": null,
          "pk": "3143068167829156557",
          "has_audio": null,
          "text_post_app_info": {
            "link_preview_attachment": null,
            "share_info": {
              "quoted_post": null,
              "reposted_post": null
            },
            "reply_to_author": null,
            "is_post_unavailable": false
          },
          "caption": {
            "text": "jika baygon anti nyamuk \nmaka saya anti mendua"
          },
          "taken_at": 1688902945,
          "like_count": 1710,
          "code": "Cuea9iQS3LN",
          "media_overlay_info": null,
          "id": "3143068167829156557_3552230280"
        },
        "line_type": "line",
        "view_replies_cta_string": "196 replies",
        "reply_facepile_users": [
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/412474620_881866580269913_7293322636489156011_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=tnf5vNZDuwgAX_vDHH_&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfA9G0ubbb_Xy18Kr3IkIC9TOWeaqdPwpMseCoQ4sN9ing&oe=66004BCE&_nc_sid=10d13b"
          },
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/399112074_24371306409149389_1278308097302218879_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=9rOv7a9LMuUAX9nu3oM&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBRNPbxTVXqFOvV-eshIIXIjLor6klCjxCB9iObqeHzxw&oe=66006BB0&_nc_sid=10d13b"
          },
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/414688634_337983099097575_4883276918151650301_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=N3IR_86pGxkAX8PNZU3&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBJTZVb6_wSCflFnSqrNi8WGv0IYZxnpH6qMUU0bpS0MA&oe=65FFB8CE&_nc_sid=10d13b"
          }
        ],
        "should_show_replies_cta": true,
        "__typename": "XDTThreadItem"
      }
    ],
    [
      {
        "post": {
          "user": {
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/358051475_293147866498631_8939835592856376911_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=3kzQFIDUBCUAX9KD3tZ&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfA2E72VLUXCFSoDvzb-Cy2hYAHV4tFvOstGbSbX6U_bjQ&oe=65FFCECF&_nc_sid=10d13b",
            "username": "bulansutena",
            "id": null,
            "is_verified": true,
            "pk": "3552230280"
          },
          "image_versions2": {
            "candidates": [
              {
                "height": 1920,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfDS6WR4lgCaclH7PiHNiQxN8l16843JFH5BIV9MJ2r_bw&oe=65FE5548&_nc_sid=10d13b",
                "width": 1440,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 1440,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfAkdoH4F5V3HQF9b2GO0SpZYWu29_2eZmkRldm8EkotkA&oe=65FE5548&_nc_sid=10d13b",
                "width": 1080,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 960,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfAbk9MDbunobcx-BOb7fbbRHJjdFZASu95y5Mwp6QZmew&oe=65FE5548&_nc_sid=10d13b",
                "width": 720,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 853,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfBt5k8TVSBBHYSGxWeAf209E0N70WgPm-TSKWu5PHteVg&oe=65FE5548&_nc_sid=10d13b",
                "width": 640,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 640,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfA3DoI5QyHcnBPK8v_yH6-dDEQ7iT9RMwp06B0Ys5Zbkw&oe=65FE5548&_nc_sid=10d13b",
                "width": 480,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 427,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfAClcUod0KVc077krtVafucEa2xNBWG41A_TvHTvSbmmA&oe=65FE5548&_nc_sid=10d13b",
                "width": 320,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 320,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=dst-jpg_e35_p240x240&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfDtxTWi2BkqLwILazit_mibCgl1bMTSHdqd6qEeZQOnjQ&oe=65FE5548&_nc_sid=10d13b",
                "width": 240,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 1080,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfBdYmFHrz6s3Eh9J5crYomsememOION-HOi-w2tWSyPLA&oe=65FE5548&_nc_sid=10d13b",
                "width": 1080,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 750,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s750x750_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfA7SPuOR8jpq5KutY7VyVbuyEG3l2ws0dHBnKIK_M8bJg&oe=65FE5548&_nc_sid=10d13b",
                "width": 750,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 640,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfDRlb7msbyzTrWL93NEY44XrQttmGUDoK2wOagA-wwcxg&oe=65FE5548&_nc_sid=10d13b",
                "width": 640,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 480,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfB79Hsgue6IIBvyuKCZMHtDMvdkoX8fqo9NgEc8r_gx7w&oe=65FE5548&_nc_sid=10d13b",
                "width": 480,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 320,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfAbVwMufs6rZF3Dz1EUs9YqqOKQK8rHkPB-sVUZ8dmHow&oe=65FE5548&_nc_sid=10d13b",
                "width": 320,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 240,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s240x240&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfBj9-OFcnO9OfMqKDi4N-5PYzt5mISKfQsAa6ZlWXmKnA&oe=65FE5548&_nc_sid=10d13b",
                "width": 240,
                "__typename": "XDTImageCandidate"
              },
              {
                "height": 150,
                "url": "https://scontent.cdninstagram.com/v/t51.29350-15/358211764_1407890673121243_4080973201554206112_n.jpg?stp=c0.240.1440.1440a_dst-jpg_e35_s150x150&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=lL5xgEh__DEAX-VMo3i&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE0MTc4NDc5MTg4MDkwMTI2OQ%3D%3D.2-ccb7-5&oh=00_AfC5jyi0TY0lf_plm5mzBtKWT7W3ibEexU5xzMWgehA7kg&oe=65FE5548&_nc_sid=10d13b",
                "width": 150,
                "__typename": "XDTImageCandidate"
              }
            ]
          },
          "original_width": 1440,
          "original_height": 1920,
          "video_versions": null,
          "carousel_media": null,
          "carousel_media_count": null,
          "pk": "3141784791880901269",
          "has_audio": null,
          "text_post_app_info": {
            "link_preview_attachment": null,
            "share_info": {
              "quoted_post": null,
              "reposted_post": null
            },
            "reply_to_author": null,
            "is_post_unavailable": false
          },
          "caption": {
            "text": "apa yang lebih indah dari tidur siang?? \ntidur sayang..."
          },
          "taken_at": 1688749954,
          "like_count": 1364,
          "code": "CuZ3J9QySKV",
          "media_overlay_info": null,
          "id": "3141784791880901269_3552230280"
        },
        "line_type": "line",
        "view_replies_cta_string": "170 replies",
        "reply_facepile_users": [
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/361943610_1693499891167232_6248367268363931357_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=O3Njk2pNUKAAX-5Kp0E&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCY9NVGyqnyzgkCEL0TXwDDXUP573sYdD0eQrBKqVwjhQ&oe=66010DC0&_nc_sid=10d13b"
          },
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/419001484_342431565300509_8362569315149741189_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=pmMGoI-_QzkAX-oxB_Z&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBQajL1epEoL-phAClCYLaGNG0MmRG21iqLFfwrjEfRVA&oe=660051CC&_nc_sid=10d13b"
          },
          {
            "__typename": "XDTUserDict",
            "id": null,
            "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/416884987_1435311683749167_259133780719557070_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=nTKZWz6gK90AX96WbAw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCrQ6B6l7l_0aywdKHRtPUe4rNYhiEE5gp6956M7kheXQ&oe=66016B89&_nc_sid=10d13b"
          }
        ],
        "should_show_replies_cta": true,
        "__typename": "XDTThreadItem"
      }
    ]
  ]
}
```

## Example Calls Request
```js
const request = require("@moonr/threads")
let req = await request('bulansutena', 'post')
console.log(req)
```