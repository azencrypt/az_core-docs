import meta from "../../../pages/_meta.js";
import bat_dau_meta from "../../../pages/bat-dau/_meta.js";
import exports_meta from "../../../pages/exports/_meta.js";
import exports_api_meta from "../../../pages/exports/api/_meta.js";
import exports_az_farm_meta from "../../../pages/exports/az-farm/_meta.js";
import exports_callback_meta from "../../../pages/exports/callback/_meta.js";
import exports_chat_hud_meta from "../../../pages/exports/chat-hud/_meta.js";
import exports_database_meta from "../../../pages/exports/database/_meta.js";
import exports_death_meta from "../../../pages/exports/death/_meta.js";
import exports_fishing_meta from "../../../pages/exports/fishing/_meta.js";
import exports_friends_meta from "../../../pages/exports/friends/_meta.js";
import exports_gov_meta from "../../../pages/exports/gov/_meta.js";
import exports_inventory_meta from "../../../pages/exports/inventory/_meta.js";
import exports_job_meta from "../../../pages/exports/job/_meta.js";
import exports_keypress_meta from "../../../pages/exports/keypress/_meta.js";
import exports_license_meta from "../../../pages/exports/license/_meta.js";
import exports_logistics_meta from "../../../pages/exports/logistics/_meta.js";
import exports_minigame_meta from "../../../pages/exports/minigame/_meta.js";
import exports_money_meta from "../../../pages/exports/money/_meta.js";
import exports_npc_meta from "../../../pages/exports/npc/_meta.js";
import exports_phone_meta from "../../../pages/exports/phone/_meta.js";
import exports_player_meta from "../../../pages/exports/player/_meta.js";
import exports_progress_meta from "../../../pages/exports/progress/_meta.js";
import exports_quest_meta from "../../../pages/exports/quest/_meta.js";
import exports_radial_meta from "../../../pages/exports/radial/_meta.js";
import exports_restraint_meta from "../../../pages/exports/restraint/_meta.js";
import exports_socket_meta from "../../../pages/exports/socket/_meta.js";
import exports_status_meta from "../../../pages/exports/status/_meta.js";
import exports_target_meta from "../../../pages/exports/target/_meta.js";
import exports_vehicle_meta from "../../../pages/exports/vehicle/_meta.js";
import exports_vip_meta from "../../../pages/exports/vip/_meta.js";
import exports_zone_meta from "../../../pages/exports/zone/_meta.js";
import lenh_meta from "../../../pages/lenh/_meta.js";
import su_kien_meta from "../../../pages/su-kien/_meta.js";
import tham_khao_meta from "../../../pages/tham-khao/_meta.js";
import tinh_nang_meta from "../../../pages/tinh-nang/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "bat-dau",
  route: "/bat-dau",
  children: [{
    data: bat_dau_meta
  }, {
    name: "az-api",
    route: "/bat-dau/az-api",
    frontMatter: {
      "sidebarTitle": "Az API"
    }
  }, {
    name: "cai-dat",
    route: "/bat-dau/cai-dat",
    frontMatter: {
      "sidebarTitle": "Cai Dat"
    }
  }, {
    name: "feature-loader",
    route: "/bat-dau/feature-loader",
    frontMatter: {
      "sidebarTitle": "Feature Loader"
    }
  }, {
    name: "giao-tiep",
    route: "/bat-dau/giao-tiep",
    frontMatter: {
      "sidebarTitle": "Giao Tiep"
    }
  }, {
    name: "kien-truc",
    route: "/bat-dau/kien-truc",
    frontMatter: {
      "sidebarTitle": "Kien Truc"
    }
  }, {
    name: "quy-tac",
    route: "/bat-dau/quy-tac",
    frontMatter: {
      "sidebarTitle": "Quy Tac"
    }
  }, {
    name: "resource-khac",
    route: "/bat-dau/resource-khac",
    frontMatter: {
      "sidebarTitle": "Resource Khac"
    }
  }]
}, {
  name: "exports",
  route: "/exports",
  children: [{
    data: exports_meta
  }, {
    name: "api",
    route: "/exports/api",
    children: [{
      data: exports_api_meta
    }, {
      name: "client",
      route: "/exports/api/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/api/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "az-farm",
    route: "/exports/az-farm",
    children: [{
      data: exports_az_farm_meta
    }, {
      name: "client",
      route: "/exports/az-farm/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/az-farm/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "callback",
    route: "/exports/callback",
    children: [{
      data: exports_callback_meta
    }, {
      name: "client",
      route: "/exports/callback/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/callback/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "chat-hud",
    route: "/exports/chat-hud",
    children: [{
      data: exports_chat_hud_meta
    }, {
      name: "client",
      route: "/exports/chat-hud/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/chat-hud/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "database",
    route: "/exports/database",
    children: [{
      data: exports_database_meta
    }, {
      name: "server",
      route: "/exports/database/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "death",
    route: "/exports/death",
    children: [{
      data: exports_death_meta
    }, {
      name: "client",
      route: "/exports/death/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/death/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "fishing",
    route: "/exports/fishing",
    children: [{
      data: exports_fishing_meta
    }, {
      name: "client",
      route: "/exports/fishing/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/fishing/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "friends",
    route: "/exports/friends",
    children: [{
      data: exports_friends_meta
    }, {
      name: "client",
      route: "/exports/friends/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/friends/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "gov",
    route: "/exports/gov",
    children: [{
      data: exports_gov_meta
    }, {
      name: "server",
      route: "/exports/gov/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "index",
    route: "/exports",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "inventory",
    route: "/exports/inventory",
    children: [{
      data: exports_inventory_meta
    }, {
      name: "client",
      route: "/exports/inventory/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/inventory/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "job",
    route: "/exports/job",
    children: [{
      data: exports_job_meta
    }, {
      name: "client",
      route: "/exports/job/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/job/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "keypress",
    route: "/exports/keypress",
    children: [{
      data: exports_keypress_meta
    }, {
      name: "client",
      route: "/exports/keypress/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/keypress/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "license",
    route: "/exports/license",
    children: [{
      data: exports_license_meta
    }, {
      name: "client",
      route: "/exports/license/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/license/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "logistics",
    route: "/exports/logistics",
    children: [{
      data: exports_logistics_meta
    }, {
      name: "server",
      route: "/exports/logistics/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "minigame",
    route: "/exports/minigame",
    children: [{
      data: exports_minigame_meta
    }, {
      name: "server",
      route: "/exports/minigame/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "money",
    route: "/exports/money",
    children: [{
      data: exports_money_meta
    }, {
      name: "client",
      route: "/exports/money/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/money/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "npc",
    route: "/exports/npc",
    children: [{
      data: exports_npc_meta
    }, {
      name: "client",
      route: "/exports/npc/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }]
  }, {
    name: "phone",
    route: "/exports/phone",
    children: [{
      data: exports_phone_meta
    }, {
      name: "client",
      route: "/exports/phone/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/phone/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "player",
    route: "/exports/player",
    children: [{
      data: exports_player_meta
    }, {
      name: "client",
      route: "/exports/player/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/player/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "progress",
    route: "/exports/progress",
    children: [{
      data: exports_progress_meta
    }, {
      name: "client",
      route: "/exports/progress/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }]
  }, {
    name: "quest",
    route: "/exports/quest",
    children: [{
      data: exports_quest_meta
    }, {
      name: "server",
      route: "/exports/quest/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "radial",
    route: "/exports/radial",
    children: [{
      data: exports_radial_meta
    }, {
      name: "client",
      route: "/exports/radial/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }]
  }, {
    name: "restraint",
    route: "/exports/restraint",
    children: [{
      data: exports_restraint_meta
    }, {
      name: "client",
      route: "/exports/restraint/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/restraint/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "socket",
    route: "/exports/socket",
    children: [{
      data: exports_socket_meta
    }, {
      name: "client",
      route: "/exports/socket/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/socket/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "status",
    route: "/exports/status",
    children: [{
      data: exports_status_meta
    }, {
      name: "client",
      route: "/exports/status/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/status/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "target",
    route: "/exports/target",
    children: [{
      data: exports_target_meta
    }, {
      name: "client",
      route: "/exports/target/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }]
  }, {
    name: "vehicle",
    route: "/exports/vehicle",
    children: [{
      data: exports_vehicle_meta
    }, {
      name: "client",
      route: "/exports/vehicle/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/vehicle/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "vip",
    route: "/exports/vip",
    children: [{
      data: exports_vip_meta
    }, {
      name: "client",
      route: "/exports/vip/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/vip/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }, {
    name: "zone",
    route: "/exports/zone",
    children: [{
      data: exports_zone_meta
    }, {
      name: "client",
      route: "/exports/zone/client",
      frontMatter: {
        "sidebarTitle": "Client"
      }
    }, {
      name: "server",
      route: "/exports/zone/server",
      frontMatter: {
        "sidebarTitle": "Server"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "lenh",
  route: "/lenh",
  children: [{
    data: lenh_meta
  }, {
    name: "az-farm",
    route: "/lenh/az-farm",
    frontMatter: {
      "sidebarTitle": "Az Farm"
    }
  }, {
    name: "client",
    route: "/lenh/client",
    frontMatter: {
      "sidebarTitle": "Client"
    }
  }, {
    name: "server",
    route: "/lenh/server",
    frontMatter: {
      "sidebarTitle": "Server"
    }
  }]
}, {
  name: "su-kien",
  route: "/su-kien",
  children: [{
    data: su_kien_meta
  }, {
    name: "client",
    route: "/su-kien/client",
    frontMatter: {
      "sidebarTitle": "Client"
    }
  }, {
    name: "mang",
    route: "/su-kien/mang",
    frontMatter: {
      "sidebarTitle": "Mang"
    }
  }, {
    name: "server",
    route: "/su-kien/server",
    frontMatter: {
      "sidebarTitle": "Server"
    }
  }]
}, {
  name: "tham-khao",
  route: "/tham-khao",
  children: [{
    data: tham_khao_meta
  }, {
    name: "database",
    route: "/tham-khao/database",
    frontMatter: {
      "sidebarTitle": "Database"
    }
  }, {
    name: "lib",
    route: "/tham-khao/lib",
    frontMatter: {
      "sidebarTitle": "Lib"
    }
  }, {
    name: "modules",
    route: "/tham-khao/modules",
    frontMatter: {
      "sidebarTitle": "Modules"
    }
  }, {
    name: "player",
    route: "/tham-khao/player",
    frontMatter: {
      "sidebarTitle": "Player"
    }
  }]
}, {
  name: "tinh-nang",
  route: "/tinh-nang",
  children: [{
    data: tinh_nang_meta
  }, {
    name: "gacha",
    route: "/tinh-nang/gacha",
    frontMatter: {
      "sidebarTitle": "Gacha"
    }
  }, {
    name: "giao-hang",
    route: "/tinh-nang/giao-hang",
    frontMatter: {
      "sidebarTitle": "Giao Hang"
    }
  }, {
    name: "job",
    route: "/tinh-nang/job",
    frontMatter: {
      "sidebarTitle": "Job"
    }
  }, {
    name: "kho-do",
    route: "/tinh-nang/kho-do",
    frontMatter: {
      "sidebarTitle": "Kho Do"
    }
  }, {
    name: "nui",
    route: "/tinh-nang/nui",
    frontMatter: {
      "sidebarTitle": "Nui"
    }
  }, {
    name: "progress",
    route: "/tinh-nang/progress",
    frontMatter: {
      "sidebarTitle": "Progress"
    }
  }, {
    name: "radial",
    route: "/tinh-nang/radial",
    frontMatter: {
      "sidebarTitle": "Radial"
    }
  }]
}];