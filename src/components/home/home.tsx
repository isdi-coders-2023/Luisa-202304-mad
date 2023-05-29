import { Component } from "../component";

export class Home extends Component {
  constructor(selector: string) {
    super(selector);
    this.selector;
    this.template = this.generateTemplate();
    this.render();
  }

  generateTemplate() {
    return `
      <ul class="characters-list row list-unstyled"></ul>
    `;
  }
}
