!function(e) {
  'use strict'; function o(o) {
    e.isArray(o)&&o.sort(function(e, o) {
      return e-o;
    });
  } if (!e.version||e.version.major<2) throw new Error('This version of OpenSeadragonZoomLevels requires OpenSeadragon version 2.0.0+'); e.Viewer.prototype.zoomLevels=function(o) {
    return (!this.zoomLevelsInstance||o)&&(o=o||{}, o.viewer=this, this.zoomLevelsInstance=new e.ZoomLevels(o)), this.zoomLevelsInstance;
  }, e.ZoomLevels=function(r) {
    const t=this; e.extend(!0, t, {viewer: null, levels: []}, r), o(r.levels); let i; const s=t.viewer.viewport; t.viewer.addHandler('zoom', function(e) {
      i!==e.zoom&&(i=e.zoom, i!==s.getHomeZoom()&&(i<s.zoomSpring.current.value?i=t.getLowerZoomLevel(i):i>s.zoomSpring.current.value&&(i=t.getUpperZoomLevel(i))), i!==e.zoom&&(e.zoom=i, s.zoomTo(i, e.refPoint, e.immediately)));
    });
  }, e.extend(e.ZoomLevels.prototype, {getUpperZoomLevel: function(o) {
    if (e.isArray(this.levels)&&this.levels.length) {
      const r=this.viewer.viewport; const t=r.viewportToImageZoom(o); o=r.imageToViewportZoom(this.levels[this.levels.length-1]); for (let i=0; i<this.levels.length; i++) {
        if (this.levels[i]>t) {
          o=r.imageToViewportZoom(this.levels[i]); break;
        }
      } return Math.min(o, r.getMaxZoom());
    } return o;
  }, getLowerZoomLevel: function(o) {
    if (e.isArray(this.levels)&&this.levels.length) {
      const r=this.viewer.viewport; const t=r.viewportToImageZoom(o); o=r.imageToViewportZoom(this.levels[0]); for (let i=this.levels.length-1; i>=0; i--) {
        if (this.levels[i]<t) {
          o=r.imageToViewportZoom(this.levels[i]); break;
        }
      } return Math.max(o, r.getMinZoom());
    } return o;
  }});
}(OpenSeadragon);
