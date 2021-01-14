var app = new Vue({
  el: '#vue_instance',
  data: {
    headerLabel: ['home', 'shop', 'about', 'gallery', 'locations', 'journal', 'contact', 'my account'],
    footerLabel: [],
  },
  methods: {
    filteredLabel: function() {
      const self = this;
      this.headerLabel.forEach((item, i) => {
        if (item != 'my account') {
          self.footerLabel.push(item)
          console.log(self.footerLabel);
        }
      });
      console.log(this.footerLabel);
    }
  },
  created: function () {
    this.filteredLabel();
  }
})
