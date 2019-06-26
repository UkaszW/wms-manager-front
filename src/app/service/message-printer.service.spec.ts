import { TestBed } from '@angular/core/testing';

import { MessagePrinterService } from './message-printer.service';

describe('MessagePrinterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagePrinterService = TestBed.get(MessagePrinterService);
    expect(service).toBeTruthy();
  });
});
