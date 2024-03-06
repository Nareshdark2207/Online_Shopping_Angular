export class ModProductDtls
{
    public id: string = '';
    public ProductURL: string = '';
    public ProductName: string = '';
    public StarsIcon: string = '';
    public HalfStarIcon: string = '';
    public WishlistIcon: string = '';
    public Ratings: string = '';
    public NewPrice: string = '';
    public OldPrice: string = '';
    public Offer: string = '';
}

export class ModProductList
{
    public _modProductDtls: Array<ModProductDtls> = [];
}