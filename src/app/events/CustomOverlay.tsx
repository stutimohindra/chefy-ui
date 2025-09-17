// CustomOverlay.tsx
"use client";
import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

export default function CustomOverlay({
  position,
  pane = "overlayMouseTarget",
  children,
}: {
  position: google.maps.LatLngLiteral;
  pane?: keyof google.maps.MapPanes;
  children: React.ReactNode;
}) {
  const map = useMap();
  const container = useMemo(() => {
    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.pointerEvents = "auto";
    return el;
  }, []);
  const overlayRef = useRef<google.maps.OverlayView | null>(null);

  useEffect(() => {
    if (!map) return;
    class HtmlOverlay extends google.maps.OverlayView {
      onAdd() {
        this.getPanes()?.[pane]?.appendChild(container);
      }
      draw() {
        const p = this.getProjection();
        if (!p) return;
        const pt = p.fromLatLngToDivPixel(new google.maps.LatLng(position));
        if (!pt) return;
        container.style.left = `${pt.x}px`;
        container.style.top = `${pt.y}px`;
      }
      onRemove() {
        container.remove();
      }
    }
    const ov = new HtmlOverlay();
    ov.setMap(map);
    overlayRef.current = ov;
    return () => ov.setMap(null);
  }, [map, container, pane]);

  // re-draw when position changes
  useEffect(() => {
    overlayRef.current?.draw();
  }, [position]);

  return createPortal(children, container);
}
