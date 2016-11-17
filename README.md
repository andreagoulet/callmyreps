# callmyreps

It has to be easier to call my public officials. This app will send phone scripts via text or notifications about causes people care about. 

This project is in the super duper early stages, so I'm using this to document my thought process with the hopes that other people can help me bring it to life and improve upon it. 

I was really motivated by the SOPA and PIPA campaigns that came out a couple years ago. I took action. I called my representatives because it was super easy. Now, we need to mobilize more than ever. My research shows that phone calls are by far the most effective form of advocacy. What gets in the way is that people don't know what to say. I found this [spreadsheet](https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=embed_facebook&sle=true#) that brillantly lays out scripts based on whether someone supports or doesn't support a given issue. 

My thought is that we could use the [Sunlight Foundation API](https://sunlightfoundation.com/api/) that powered the SOPA and PIPA campaigns to help create customized scripts for people. 

I imagine a really simple interface that asks a series of questions: 

1. What's your zipcode? 
2. What issues do you care about? (boolean toggles with fixed categories)
3. How many times per week do you want to call? (default to 5) 
4. When's the best time to get reminders? (boolean toggles for morning, noon, and afternoon) 

##Domain Model

* Script
* Party (Republican, Democrat, Independent, N/A) 
* Voting Record (pulled from Sunlight API)
* Issue (From [calling sheet](https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/htmlview?usp=embed_facebook&sle=true#) Healthcare, Immigration, Reproductive Rights, etc.) 
* Representative
  * National Representative (Senator, House)
  * State Representative (Governor, State Senate, State House)
  * Local Representative (School Board, Special Districts, Board of Supervisor, Town/City Council, Mayor, etc.) 
* District (geographic region within which people vote for a certain office) 
