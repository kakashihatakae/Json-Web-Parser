export interface ParentElementType {
  type: string;
  children: [];
  color?: string;
}

export interface TextElementType {
  text: String;
  bold?: boolean;
  underline?: boolean;
  italicize?: boolean;
}
