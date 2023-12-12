export abstract class IEntry {
  abstract exists(): Promise<boolean>;
}
