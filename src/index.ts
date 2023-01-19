
type ExportMap = string | Record<string, any>;

export function resolve(exportmap: ExportMap, conditions?: string[]) {
  return exportmap;
}

export function normalize(exportmap: ExportMap) {
  return exportmap;
}

export function validate(exportmap: ExportMap): boolean {
  return false;
}