import { layoutSymbols } from '../symbols';
import {
  layoutComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 3
 */
export const layoutSymbolsToComponents = {
  [layoutSymbols.pageLayout]: [
    componentsNames.Page,
    componentsNames.PageHeader,
    componentsNames.Grid,
    componentsNames.Card,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.marketingPageLayout]: [
    componentsNames.MarketingPageLayout,
    componentsNames.MarketingPageLayoutContent,
    componentsNames.TestimonialList,
    componentsNames.FeatureList,
  ],
  [layoutSymbols.cardLayout]: [
    componentsNames.Card,
    componentsNames.CardHeader,
    componentsNames.CardSubheader,
    componentsNames.Grid,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.tableLayout]: [
    componentsNames.Table,
    componentsNames.TableActionCell,
    componentsNames.TableToolbar,
  ],
  [layoutSymbols.sidePanel]: [componentsNames.SidePanel],
};
