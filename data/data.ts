export class Data {
  public readonly password = "s3cret";
  constructor(private readonly data) {}
  getUsername() {
    const randomIndex = Math.floor(Math.random() * this.data.users.length);
    return this.data.users[randomIndex].username;
  }
}
