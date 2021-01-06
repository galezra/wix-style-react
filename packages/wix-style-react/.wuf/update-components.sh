#!/usr/bin/env bash

rm .wuf/components.json || true

# create components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src \
  --max-mismatch 1 \
  --exclude "(Typography|dnd-styles|DragDropContextProvider)" \
  --output .wuf/components.json


# vanilla testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla.template.ejs \
  --output testkit/index.js

# vanilla testkits typescript definitions
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla-typescript.template.ejs \
  --output testkit/index.d.ts


# enzyme testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/enzyme.template.ejs \
  --output testkit/enzyme.js

# enzyme testkits typescript definitions
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/enzyme-typescript.template.ejs \
  --output testkit/enzyme.d.ts


# protractor testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/protractor.template.ejs \
  --output testkit/protractor.js

# protractor testkits typescript definitions
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/protractor-typescript.template.ejs \
  --output testkit/protractor.d.ts


# puppeteer testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/puppeteer.template.ejs \
  --output testkit/puppeteer.js

# puppeteer testkits typescript definitions
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/puppeteer-typescript.template.ejs \
  --output testkit/puppeteer.d.ts
