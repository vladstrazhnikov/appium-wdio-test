export class SavedPage {
    get savedArticle() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia:id/page_list_item_title"]');
    }

    async openSavedArticles(){
        const savedArticles = await $('//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup');
        savedArticles.click();
    };
}