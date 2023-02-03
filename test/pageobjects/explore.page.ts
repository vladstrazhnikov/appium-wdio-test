export class ExplorePage {
    get searchContainer() {
        return $('//android.widget.TextView[@text="Search Wikipedia"]');
    }

    get openedSearchContainer() {
        return $('//android.widget.AutoCompleteTextView[@resource-id="org.wikipedia:id/search_src_text"]');
    }

    get elemSearch(){
        return $$('//android.view.ViewGroup');
    }

    public async openSearch() {
        await this.searchContainer.click();
        // await this.searchContainer.addValue(text);
    }

    public async fillOpenedSearch(text: string) {
        await this.openedSearchContainer.addValue(text);
    }

    public async elemSearchBtn() {
        await this.elemSearch[1].click();
    }
}