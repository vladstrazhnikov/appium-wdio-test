export class ExplorePage {
    get searchInput() {
        return $('//android.widget.TextView[@text="Search Wikipedia"]');
    }

    get searchResultsContainer() {
        return $('//android.widget.AutoCompleteTextView[@resource-id="org.wikipedia:id/search_src_text"]');
    }

    get searchResults() {
        return $$('//android.view.ViewGroup')[1].$('//android.widget.TextView[@resource-id="org.wikipedia:id/page_list_item_title"]');
    }

    public async searchFor(text: string) {
        await this.searchInput.click();
        await this.searchResultsContainer.addValue(text);
        await this.searchResults.click();
    }
}