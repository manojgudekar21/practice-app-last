export class User {
    constructor(public email: string, public localid: string, private _tokenId: string, private _expirationId: Date) { }

    get token() {
        if (!this._expirationId || new Date() > this._expirationId) {
            return null;
        }
        return this._tokenId;
    }
}