export const previewCells = [
  {
    shape: 'edge',
    attrs: {
      line: {
        stroke: '#000000',
        strokeWidth: 1,
        targetMarker: {
          name: 'classic',
          size: 10,
        },
        strokeDasharray: 0,
      },
    },
    id: '587dcbc9-f26f-4d1e-817a-6007b17716dc',
    connector: 'normal',
    router: {
      name: 'manhattan',
    },
    zIndex: 0,
    source: {
      cell: 'bcc4bcd2-a42c-4dff-9013-8a5a6dfc86a5',
      port: 'port4',
    },
    target: {
      cell: 'c8d5a522-99a5-4ac0-b231-b7c3a718be14',
      port: 'port3',
    },
  },
  {
    position: {
      x: 510,
      y: 160,
    },
    size: {
      width: 80,
      height: 80,
    },
    attrs: {
      text: {
        text: '圆形1\n',
        dx: 5,
      },
      body: {
        refD: 'M 0 40 C 0 -13.333333333333334, 80 -13.333333333333334, 80 40 C 80 93.33333333333333, 0 93.33333333333333, 0 40 Z ',
      },
      rect: {
        strokeWidth: 1,
      },
    },
    visible: true,
    shape: 'path',
    id: 'bcc4bcd2-a42c-4dff-9013-8a5a6dfc86a5',
    data: {
      disableMove: false,
      shapeClassify: 'baseShape',
    },
    tools: {
      items: [
        {
          name: 'node-editor',
        },
      ],
      name: null,
    },
    ports: {
      groups: {
        in: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        out: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
      },
      items: [
        {
          id: 'port1',
          group: 'in',
        },
        {
          id: 'port2',
          group: 'out',
        },
        {
          id: 'port3',
          group: 'left',
        },
        {
          id: 'port4',
          group: 'right',
        },
      ],
    },
    zIndex: 1,
  },
  {
    position: {
      x: 792,
      y: 120,
    },
    size: {
      width: 144,
      height: 161,
    },
    attrs: {
      text: {
        text: '便利贴',
        dx: 5,
      },
      rect: {
        fill: '#C5E158',
        strokeWidth: 0,
      },
    },
    visible: true,
    shape: 'rect',
    id: 'c8d5a522-99a5-4ac0-b231-b7c3a718be14',
    backgroundColor: '#C5E158',
    textFillStyle: '#333',
    fontSize: 16,
    data: {
      disableMove: false,
      shapeClassify: 'stickyShape',
    },
    tools: {
      items: [
        {
          name: 'node-editor',
        },
      ],
      name: null,
    },
    ports: {
      groups: {
        in: {
          position: 'top',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        out: {
          position: 'bottom',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        left: {
          position: 'left',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
        right: {
          position: 'right',
          attrs: {
            circle: {
              magnet: true,
              stroke: '#8f8f8f',
              r: 5,
              style: {
                visibility: 'hidden',
              },
            },
          },
        },
      },
      items: [
        {
          id: 'port1',
          group: 'in',
        },
        {
          id: 'port2',
          group: 'out',
        },
        {
          id: 'port3',
          group: 'left',
        },
        {
          id: 'port4',
          group: 'right',
        },
      ],
    },
    zIndex: 2,
  },
];

export const getConfig = (id) => {
  if(id!='flow-15896_true'){
    return []
  }
  return [
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#000000',
          strokeWidth: 1,
          targetMarker: {
            name: 'classic',
            size: 10,
          },
          strokeDasharray: 0,
        },
      },
      id: '44e22477-2578-43bb-95bc-a736d99292a5',
      connector: 'normal',
      router: {
        name: 'manhattan',
      },
      zIndex: 0,
      source: {
        cell: '6b31630e-80fd-49b3-89bf-b520df67e9fb',
        port: 'port4',
      },
      target: {
        cell: '3468a913-88a0-4542-bd99-8e8d7902d01e',
        port: 'port3',
      },
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#000000',
          strokeWidth: 1,
          targetMarker: {
            name: 'classic',
            size: 10,
          },
          strokeDasharray: 0,
        },
      },
      id: '8de78f6a-a24c-46ed-9dff-afa94ffbbdf8',
      connector: 'normal',
      router: {
        name: 'manhattan',
      },
      zIndex: 0,
      source: {
        cell: 'c4756b77-e587-4b7e-a81f-8f8ea13aa2bb',
        port: 'port3',
      },
      target: {
        cell: '3468a913-88a0-4542-bd99-8e8d7902d01e',
        port: 'port4',
      },
    },
    {
      position: {
        x: 530,
        y: 210,
      },
      size: {
        width: 80,
        height: 80,
      },
      attrs: {
        text: {
          text: '圆形',
          dx: 5,
        },
        body: {
          refD: 'M 0 40 C 0 -13.333333333333334, 80 -13.333333333333334, 80 40 C 80 93.33333333333333, 0 93.33333333333333, 0 40 Z ',
        },
        rect: {
          strokeWidth: 1,
        },
      },
      visible: true,
      shape: 'path',
      id: '3468a913-88a0-4542-bd99-8e8d7902d01e',
      data: {
        disableMove: false,
        shapeClassify: 'baseShape',
      },
      tools: {
        items: [
          {
            name: 'node-editor',
          },
        ],
        name: null,
      },
      ports: {
        groups: {
          in: {
            position: 'top',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          out: {
            position: 'bottom',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'out',
          },
          {
            id: 'port3',
            group: 'left',
          },
          {
            id: 'port4',
            group: 'right',
          },
        ],
      },
      zIndex: 1,
    },
    {
      position: {
        x: 860,
        y: 169.5,
      },
      size: {
        width: 144,
        height: 161,
      },
      attrs: {
        text: {
          text: '便利贴',
          dx: 5,
        },
        rect: {
          fill: '#C5E158',
          strokeWidth: 0,
        },
      },
      visible: true,
      shape: 'rect',
      id: 'c4756b77-e587-4b7e-a81f-8f8ea13aa2bb',
      backgroundColor: '#C5E158',
      textFillStyle: '#333',
      fontSize: 16,
      data: {
        disableMove: false,
        shapeClassify: 'stickyShape',
      },
      tools: {
        items: [
          {
            name: 'node-editor',
          },
        ],
        name: null,
      },
      ports: {
        groups: {
          in: {
            position: 'top',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          out: {
            position: 'bottom',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'out',
          },
          {
            id: 'port3',
            group: 'left',
          },
          {
            id: 'port4',
            group: 'right',
          },
        ],
      },
      zIndex: 2,
    },
    {
      position: {
        x: 220,
        y: 169.5,
      },
      size: {
        width: 144,
        height: 161,
      },
      attrs: {
        text: {
          text: '便利贴',
          dx: 5,
        },
        rect: {
          fill: '#FEA048',
          strokeWidth: 0,
        },
      },
      visible: true,
      shape: 'rect',
      id: '6b31630e-80fd-49b3-89bf-b520df67e9fb',
      backgroundColor: '#8ED376',
      textFillStyle: '#333',
      fontSize: 16,
      data: {
        disableMove: false,
        shapeClassify: 'stickyShape',
      },
      tools: {
        items: [
          {
            name: 'node-editor',
          },
        ],
        name: null,
      },
      ports: {
        groups: {
          in: {
            position: 'top',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          out: {
            position: 'bottom',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
                style: {
                  visibility: 'hidden',
                },
              },
            },
          },
        },
        items: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'out',
          },
          {
            id: 'port3',
            group: 'left',
          },
          {
            id: 'port4',
            group: 'right',
          },
        ],
      },
      zIndex: 3,
    },
  ];
};
