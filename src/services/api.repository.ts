export class ApiRepository<T extends { id: string | number }> {
  constructor(public url: string) {}

  async getAll(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }

  async get(id: T["id"]): Promise<T> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<T>;
  }
}
