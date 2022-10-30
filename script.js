const list = document.querySelector('.list');
	list.scrollTop = 1;
	list.addEventListener('scroll', function(ev) {
	  let items = this.querySelectorAll('.item');
	  if (parseInt(this.scrollTop) == 0) {
	    this.scrollTop = items[items.length - 1].clientHeight;
	    this.prepend(items[items.length - 1]);
	    this.scrollTop = 1;
	  } else if (this.scrollTop > this.scrollHeight - this.clientHeight - 1) {
	    this.append(items[0]);
	  }
	  return false;
	});
