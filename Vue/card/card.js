let html = `
<div id="card" class="card">
        <img src="asset/avator.jpg" alt="Avatar" style="width: 100%;">
        
        <div class="container">
          <h4><b>John Doe</b></h4> 
          <p>Architect & Engineer</p> 
        </div>
</div>
`;

Vue.component('card', {
    data: function () {
      return {
        count: 0
      }
    },
    template: html
})