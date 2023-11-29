export class NumberFactory {
    static getArrayOfNElements(nElements: number): number[] {
        return Array.from({ length: nElements }, (_, index) => index + 1);
    }
}
