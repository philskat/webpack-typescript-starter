class Counter {
  $counter: HTMLButtonElement;
  $counterDisplay: HTMLSpanElement;
  count: number;

  constructor() {
    // Select HTML-Elements
    this.$counter = document.getElementById('counter') as HTMLButtonElement;
    this.$counterDisplay = document.getElementById(
      'counterDisplay'
    ) as HTMLButtonElement;

    // Initialize count and update Display
    this.count = 0;
    this.update();

    // Register Events
    this.$counter.addEventListener('click', () => this.increment());
  }

  private update() {
    this.$counterDisplay.textContent = this.count.toString();
  }

  increment() {
    this.count++;
    this.update();
  }

  decrement() {
    this.count--;
    this.update();
  }
}

export default new Counter();
