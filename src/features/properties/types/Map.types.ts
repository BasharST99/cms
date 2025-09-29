export type Coords = [number, number];

export interface ChangeViewProps {
  center: Coords;
}

export interface EstatesMapProps {
  mapSearch: any;
  markersLocations: Array<{ coords: Coords; name: string }> | any;
  zoomCoords?: Coords | null;
}

