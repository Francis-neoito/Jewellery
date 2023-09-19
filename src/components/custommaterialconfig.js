import {
  Color,
    MaterialConfiguratorBasePlugin,
    imageBitmapToBase64, makeColorSvgCircle
  } from 'webgi';


class CustomMaterialConfigPlugin extends MaterialConfiguratorBasePlugin {
    static PluginType = "MaterialConfiguratorPlugin";

    // this function is automatically called when an object is loaded with some material variations
    async _refreshUi() {
      if (!(await super._refreshUi())) return false; // check if any data is changed.
      const configuratorDiv = document.getElementById("mconfigurator");
  
      configuratorDiv.innerHTML = "";
  
      for (const variation of this.variations) {
        const container = document.createElement("div");
        container.classList.add("variations");
        container.innerHTML = "<span class=\"variationTitle\"> "+ variation.title;
        configuratorDiv.appendChild(container);
        const varTile = document.createElement("div");
        varTile.classList.add("variationTile");
        container.appendChild(varTile);
        variation.materials.map((material) => {
          // material is the variation that can be applied to an object
          let image;
          if (!variation.preview.startsWith("generate:")) {
            const pp = material[variation.preview] || "#ff00ff";
            image = pp.image || pp;
            image = pp.image ? imageBitmapToBase64(pp.image, 100) : undefined
            if (!image) image = makeColorSvgCircle(pp)
          } else {
            // Generate a small snapshot of the material preview based on some shape (optional)
            const matColor = material.color;
            image = makeColorSvgCircle(matColor.getHexString());
            // image = this._previewGenerator.generate(
            //   material,
            //   variation.preview.split(":")[1]
            // );
          }
          // callback to change the material variations
          const onClick = () => {
            this.applyVariation(variation, material.uuid);
          };
          // Generate a UI from this data.
          console.log({
            uid: material.uuid,
            color: material.color,
            material: material,
            image,
            onClick
          });
          const selectorDiv = document.createElement("div");
          selectorDiv.classList.add("variationSelector");
          selectorDiv.innerHTML = '<img class="variationImage" src="' + image + '" title="'+ material.name + '"/>';
          selectorDiv.onclick = onClick;
          varTile.append(selectorDiv);
        });
      }
      return true;
    }
  }

  export default CustomMaterialConfigPlugin;
  