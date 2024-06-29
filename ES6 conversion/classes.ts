class Rectangle {
  static displayName = "Point";
  height: number;
  width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  get h() {
    return this.height;
  }

  set h(val: number) {
    this.height = val;
  }

  set w(val: number) {
    this.width = val;
  }

  printHeight() {
    console.log("height ", this.height);
  }

  static doSomething() {
    return this.displayName;
  }
}
