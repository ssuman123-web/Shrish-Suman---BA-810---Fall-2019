export class FilterWidgetsValueConverter {
      toView(widgets, nofilterWidgets) {
        if (!widgets) return;
        if (nofilterWidgets) return widgets;
        let filteredWidgets = [];
        widgets.forEach(widget => {
          if (widget.status !== 'Completed') filteredWidgets.push(widget);
        });
        return filteredWidgets;
      }
    }
    