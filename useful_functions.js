function applyStyle(
  $buttons, //button that will be clicked
  $flexContainer, //elements to apply the style to
  declarationProperty // style property
) {
  console.log("zove se");
  $buttons.click((e) => {
    console.log("zove se");
    $buttonEl = $(e.currentTarget);
    $flexContainer.css(declarationProperty, $buttonEl.text());
  });
}
