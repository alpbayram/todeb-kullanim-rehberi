"""Her sayfadaki açık [Karar bekliyor] kartlarını sayar ve sol menüde rozet olarak gösterilmesini sağlar."""
import re
from pathlib import Path

_counts = {}


def on_nav(nav, config, files):
    _counts.clear()
    for file in files.documentation_pages():
        text = Path(file.abs_src_path).read_text(encoding="utf-8")
        count = len(re.findall(r"<!--\s*REVIEW:START", text))
        if count:
            _counts[file.src_uri] = count
    return nav


def on_page_context(context, page, config, nav):
    context["review_counts"] = dict(_counts)
    return context
