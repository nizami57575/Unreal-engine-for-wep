export class Dinosaur {
  public health: number = 100;
  public state: 'idle' | 'hunting' | 'sleeping' = 'idle';

  constructor(public modelName: string) {}

  update(deltaTime: number) {
    if (this.state === 'hunting') {
      this.moveTowardsTarget();
    }
  }

  private moveTowardsTarget() {
    // Procedural hareket mantığı burada (WASM ile güçlendirilecek)
  }
}
