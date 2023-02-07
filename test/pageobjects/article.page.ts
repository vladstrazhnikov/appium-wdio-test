export class ArticlePage {
    get articleTitle() {
        return $('//android.view.View[1]/android.widget.TextView[1]');
    };

    get articleDate() {
        return $('//android.widget.TextView[@resource-id="org.wikipedia:id/day_header_text"]');
    }

    get featuredArticle() {
        return $('//androidx.cardview.widget.CardView[@resource-id="org.wikipedia:id/view_featured_article_card_content_container"]');
    }
}