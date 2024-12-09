export enum DirectoryFieldTypeEnum {
  Integer = 'integer',
  Float = 'float',
  String = 'string',
  Date = 'date',
  DateTime = 'datetime',
  Time = 'time',
}

export interface DirectoryField {
  name: string;
  code: string
  type: DirectoryFieldTypeEnum;
  required: boolean;
  multiple: boolean;
  order: number;
  show_in_list: boolean;
}