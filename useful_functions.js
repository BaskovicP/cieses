function applyStyle(
  $buttons, //button that will be clicked
  $flexContainer, //elements to apply the style to
  declarationProperty // style property
) {
  $buttons.click((e) => {
    $buttonEl = $(e.currentTarget);
    $flexContainer.css(declarationProperty, $buttonEl.text());
  });
}
