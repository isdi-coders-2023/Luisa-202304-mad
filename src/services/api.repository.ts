export class ApiRepository<T extends { id: string | number }> {
  url = "https://rickandmortyapi.com/api/character";

  async getAll() {
    const response = await fetch(this.url);
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