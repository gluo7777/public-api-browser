- Header
- App
    * searchSetting: HTTP,...,Category
    - Search(searchSetting)
        * requestString
        * listenForInput()
        * debounce(listenForInput)
        * makeRequest(requestString,searchSetting)
            * payLoad: JsonList
        - ResultList(payLoad) {await makeRequest}
            * generateResultList(payLoad) {await makeRequest}
            * showList
            - Result(showList)
                * viewDetails(): Details
            - Details(showList)
                * goBack()
    - Control(searchSetting)
        * activeTab
        - Tabs(onTabSelectedCB)
            * selectTab => activeTab
        - TabContents(searchSetting,activeTab)
            * showContent(activeTab)
                - TabContent(searchSetting)
                    - Filter(searchSetting)
                        * requestString
                        * getCategories(requestString)
                        * updateSearchSetting(searchSetting)
                    - Setting
- Footer