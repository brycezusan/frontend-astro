export type APIResponseGuitars = {
  data: Datum[];
  meta: Meta;
}

export type Datum = {
  id:         number;
  attributes: DatumAttributes;
}

export type DatumAttributes = {
  name:        string;
  description: Description[];
  price:       number;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  url:         string;
  image:       Image;
}

export type Description = {
  type:     DescriptionType;
  children: DescriptionChild[];
  format?:  Format;
}

export type DescriptionChild = {
  text?:     string;
  type:      ChildType;
  children?: ChildChild[];
}

export type ChildChild = {
  text: string;
  type: ChildType;
}

export enum ChildType {
  ListItem = "list-item",
  Text = "text",
}

export enum Format {
  Unordered = "unordered",
}

export enum DescriptionType {
  List = "list",
  Paragraph = "paragraph",
}

export type Image = {
  data: Data;
}

export type Data = {
  id:         number;
  attributes: DataAttributes;
}

export type DataAttributes = {
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          Provider;
  provider_metadata: ProviderMetadata;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
  PNG = ".png",
}

export type Formats = {
  small?:    Medium;
  medium?:   Medium;
  thumbnail: Medium;
}

export type Medium = {
  ext:               EXT;
  url:               string;
  hash:              string;
  mime:              MIME;
  name:              string;
  path:              null;
  size:              number;
  width:             number;
  height:            number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export type ProviderMetadata = {
  public_id:     string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export enum Provider {
  Cloudinary = "cloudinary",
}

export type Meta = {
  pagination: Pagination;
}

export type Pagination = {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
