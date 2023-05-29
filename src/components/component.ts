export abstract class Component {
  template!: string;
  element!: Element;

  constructor(public selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = "beforeend") {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw Error("Invalid selector");
    parentElement.insertAdjacentHTML(position, this.template);

    this.element = parentElement.lastElementChild!;
  }
}
