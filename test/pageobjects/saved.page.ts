export class SavedPage {
    // private savedArticles = $('android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup');
    get savedArticle() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia:id/page_list_item_title"]');
    }

    async openSavedArticles(){
        const savedArticles = await $('//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup');
        savedArticles.click();
    };

    // async openSavedArticles(){
    //     await this.savedArticles.click();
    //     return this;
    // };
}