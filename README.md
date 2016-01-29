# RB image: horizontal or vertical

Responsively adds classes to images, based on their dimensions and dimensions of the parent container.

### What you need
- jQuery.

### How to use
`$('.img-class').RBimgHorV();`

### Options
- **hClass** - default class name for horizontal images. *(default: img-h)*
- **vClass** - default class name for vertical images. *(default: img-v)*

### Styling images
This is optional.  
If you want help with images styling, add this sass mixin into your sass file. 

```scss
@mixin imgHorV {
	position: relative;
	overflow: hidden;
	&.img-h, &.img-v {
		display: block;
		position: absolute;
		right: auto;
		bottom: auto;
	}
	&.img-h {
		width: auto;
		height: 100%;
		max-width: none;
		max-height: 100%;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	&.img-v {
		width: 100%;
		height: auto;
		max-width: 100%;
		max-height: none;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
}
```
Next use `@include imgHorV();` in your container div.