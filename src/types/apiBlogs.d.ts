export type APIResponseBlogs = {
  data: Datum[];
  meta: Meta;
}

export type Datum = {
  id:         number;
  attributes: DatumAttributes;
}

export type DatumAttributes = {
  title:       string;
  content:     Content[];
  url:         string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  image:       Image;
}

export type Content = {
  type:     ContentType;
  children: ContentChild[];
  format?:  Format;
}

export type ContentChild = {
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

export enum ContentType {
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
  provider:          string;
  provider_metadata: ProviderMetadata;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum EXT {
  Jpg = ".jpg",
}

export type Formats = {
  small:     Medium;
  medium:    Medium;
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
}

export type ProviderMetadata = {
  public_id:     string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
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
