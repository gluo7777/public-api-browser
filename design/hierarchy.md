- Header
- App
    * searchSetting: HTTP,...,Category
    - Search(searchSetting)
        * requestString
        * makeRequest(requestString,searchSetting)
            * payLoad: JsonList
        - ResultList(payLoad)
            * generateResultList(payLoad)
            * showList
            - Result(showList)
                * viewDetails(): Details
            - Details(showList)
                * goBack()
    - Control(searchSetting)
        * selectedTab
        - Tabs
            * selectTab => selectedTab
        - TabContents(searchSetting,selectedTab)
            * showContent(selectedTab)
                - TabContent
                    - Filter
                        * getCategories(requestString)
                        * updateSearchSetting(searchSetting)
                    - Setting
- Footer