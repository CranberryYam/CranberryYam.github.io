let html_feed = `
<div id="feed">
            <card v-for="shop in shops">
                {{ shop.text }}
            </card>
</div>
`;

var shops = [ { text: 'Learn JavaScript' },
              { text: 'Learn Vue' },
              { text: 'Build something awesome' },
              { text: 'Learn JavaScript' },
              { text: 'Learn Vue' },
              { text: 'Build something awesome' },
              { text: 'Learn JavaScript' },
              { text: 'Learn Vue' },
              { text: 'Build something awesome' }];

Vue.component('feed', {
    data: function () {
        return {
          shops: shops
        }
      },
    template: html_feed
})